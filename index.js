const model = [
   { type: 'title', value: "hello" },
   { type: "text", value: "we here" },
   {
      type: "colums", value: [
         "111111",
         "222222",
         "333333",
         "444444"
      ]
   }
]
// Получаем доступ из дом дерева к селектору 
const $site = document.querySelector('#site')

//пробигаемся по массиву model с помощью forEach B генериреум  html от каждого обьекта 
model.forEach(block => {
   let html = ' '

   if (block.type === 'title') {
      html = title(block)


   } else if (block.type === 'text') {
      html = text(block)

   } else if (block.type === 'colums') {
      html = colums(block)
   }

   // вставяем html в определенное место
   $site.insertAdjacentHTML('beforeend', html)
})


function title(block) {
   return `
         <div class="row">
            <div class="col-sm">
               <h1>${block.value}</h1>
            </div>
         </div>
         `
}
function text(block) {
   return `
         <div class="row">
            <div class="col-sm">
               <p>${block.value}.</p>
            </div>
         </div >
         `
}

function colums(block) {
   //let html = ' '

   //block.value.forEach(item => {
   //   html += `
   //      <div class="col-sm" >
   //         ${item}
   //      </div >
   //      `
   //})
   //тоже самое только через map
   const html = block.value.map(item => ` <div class="col-sm" >${item}</div >`)
   return `
         <div class="row" >
            ${html.join(' ')} 
            </div >
         ` /* соеденяем массив с помощью  join(' ') для того что бы убрать замятую */
}