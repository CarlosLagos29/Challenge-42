const NonConstructible = (arr) => {

    if (!arr?.length) {
        return 1;
    }

    arr.sort((a, b) => a - b);

    let notSum = 1;

    for (let x = 0; x < arr.length; x++) {
        if (notSum < arr[x]) {
            break;
        }
        notSum += arr[x];
    }

    return notSum;
};

export default NonConstructible
