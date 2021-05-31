var documents = [{
    "name": "1864-05-01",
    "text": "Sunday, May 1st, the 2nd Division 14th Army Corps ​still at Rosville Georgia.",
    "tags": ""
  }, {
    "name": "1864-05-02",
    "text": "Monday, 2nd – Marched to Ringgold distance 12 miles",
    "tags": "movement"
  }, {
    "name": "1864-05-05",
    "text": "Thursday. – 5th the Division marched one mile south of ​Taylors Rridge; The 34th went back to Ringgold to obain new guns. & got mail Saw some of the 75th",
    "tags": "movement provisioning mail"    
  }, {
    "name": "1864-05-07",
    "text": "Saturday, 7th Division marched to Buzard Roost skirmishing ​all the way. the 4th Army Core. took Tunnel Hill",
    "tags": "movement combat"
  }, {
    "name": "1864-05-08",
    "text": "Sunday, 8th Companies A F & B went on picket Saturday evening ​came of Sunday PM & the Regiment was sent to take ​a position on a hill. Company A deployed as skir​mishers. waded Mill Creek took a hill ​& fought till dark; then went to camp.",
    "tags": "movement combat"
  }
]
  


var idx = lunr(function () {
    this.ref('name')
    this.field('text')
    this.field('tags')
  
    documents.forEach(function (doc) {
      this.add(doc)
    }, this)
  }) 

document.getElementById('lunr-suche').addEventListener('click', (e) => {
    if (document.getElementById('searchphrase').value.trim() !== ''){
        document.getElementById('results').innerHTML = '';
        //console.log(document.getElementById('searchphrase').value);
        let resp = idx.search(`${document.getElementById('searchphrase').value}`);
        //console.log(resp);
        resp.forEach((i) => documents.filter((n) => i.ref == n.name).forEach((x) => {
          var [year, month, day] = x.name.split('-');
          document.getElementById('results').innerHTML += `<p class="result"><strong>${day}.${month}.${year}</strong>: ${x.text}</p>`
      }));
        //console.log(l);
    }
})