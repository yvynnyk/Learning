let list = {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null}}}};

function showList (list) {
    /*console.log(list.value);
    if (list.next) {
        showList(list.next);
    }
    */
    let tempList = list;
    while(tempList) {
        console.log(tempList.value);
        tempList = list.next;
    }

}
showList(list);