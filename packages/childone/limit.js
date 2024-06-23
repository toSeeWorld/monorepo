const limitPromise = (promisList = [], max) => {
  return new Promise(async (rs) => {
    let queue = [],
      pool = [],
      running = 0;
    const execute = (promise) => {
      const start = () => {
        console.timeLog('times')
        promise().catch(()=>{
        }).finally(() => {
          pool.shift();
          running = running + 1;
          const qp = queue.shift();
          if (qp) {
            execute(qp);
          } else if (running === promisList.length) {
            rs();
          }
        });
      };
      if (pool.length < max) {
        pool.push(promise);
        start(promise);
      } else {
        queue.push(promise);
      }
    };
    for (let p of promisList) {
      execute(p);
    }
  });
};
const fetch = () => {
  return new Promise((rs, rj) => {
    const random = Math.floor(Math.random() * 100);
    if (random < 50) {
      setTimeout(() => {
        rs();
      }, 500);
    } else {
      setTimeout(() => {
        rj();
      }, 500);
    }
  });
};
let promises = Array.from({ length: 10 }, () => fetch);
const startDate = Date.now();
console.log('chagne')
console.time("times");
limitPromise(promises, 4).then(
  () => {
    console.log("done in " + (Date.now() - startDate));
  },
  (err) => {
    console.log(err);
  }
);

// max,count
// count < max
// 取一个出来，执行
// 否则结束
