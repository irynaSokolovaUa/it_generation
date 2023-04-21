onmessage = function (e) {
    let [first, second, action] = e.data
    console.log("Отримано повідомлення від основного потоку");
    let workerResult;
    console.log(e.data);

    switch (action) {
        case "add":
            workerResult = (Number(first) + Number(second))
            break;
        case "subtract":
            workerResult = (Number(first) - Number(second))
            break;
        case "multiply":
            workerResult = (Number(first) * Number(second))
            break;
        case "divide":
            workerResult = (Number(first) / Number(second))
            break;
        default:
            workerResult = "Невідома операція";
            break;
    }
    console.log("Надсилання повідомлення до основного потоку");
    postMessage(workerResult);
  };