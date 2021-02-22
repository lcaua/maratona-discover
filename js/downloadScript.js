window.onload = function() {
    document.getElementById('download').addEventListener('click', ()=> {
        const dataTable = this.document.getElementById('data-table');
        console.log(dataTable); 
        console.log(window);
        html2pdf().from(dataTable).save();
    })
}