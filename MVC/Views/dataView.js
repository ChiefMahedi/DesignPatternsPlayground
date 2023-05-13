
export  async function dataView(products) {
    return new Promise((resolve, reject)=>{
        let html = '<ul>';
        for (let p of products) {
          html += `<li>${p.name}</li>`;
        }
        html += '</ul>';
        resolve(html);
    })
  }
  