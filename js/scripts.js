document.getElementById('frmSearch').onsubmit = function() {
        window.location = 'http://www.google.com/search?q=site:file:///home/moringa/Desktop/samples/index.html ' + document.getElementById('txtSearch').value;
        return false;
window.location = 'http://google.com/?q=site:mysite.com+'+escape(document.getElementById('searchbar');
