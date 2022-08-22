$('#demo').pagination({
    dataSource: [1, 2, 3, 4, 5, 6, 7, ... , 25],
    pageSize: 3,
    showGoInput: true,
    showGoButton: true,
    formatGoInput: 'go to <%= input %> st/rd/th',
    callback: function(data, pagination) {
        // template method of yourself
        var html = template(data);
        dataContainer.html(html);
    }
})