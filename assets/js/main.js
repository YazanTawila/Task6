fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then( res => res.json())
    .then( res => featured(res))

    let Cards = document.getElementById('featured-row')

    function featured(res){

        console.log(res);
        for (let index = 45 ; index >= 42 ; index--){
            Cards.innerHTML += `
                <div class="book-card col-lg-3 col-md-6 col-sm-12 border-0 ">
                    <div class="div-animation position-relative">
                        <img src="${res[index].simple_thumb}" class="w-75 bg-second-color p-4" alt="book image">
                        <div class="add-to-cart d-flex justify-content-center align-items-center">
                            <p class="text-white fw-bold">ADD TO CART</p>
                        </div>
                    </div>
                    <h4 class="title-color mt-4">${res[index].title}<h4/>
                    <p class="fs-6 paragraph-color">${res[index].author}</p>
                </div>
            `
        }
    }

fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then(res => res.json())
    .then(res => popularBooks(res));

    let PopularBooksDiv = document.getElementById('popular-books');
    function  popularBooks(res)
    {
        for (let index = 0; index < res.length; index++ ) {

        console.log(res);
        PopularBooksDiv.innerHTML += `
        <div class="col-lg-3 col-6-md col-sm-12">
            <div class="div-animation position-relative">
                        <img src="${res[index].simple_thumb}" class="w-75 bg-second-color p-4" alt="book image">
                        <div class="add-to-cart d-flex justify-content-center align-items-center">
                            <p class="text-white fw-bold">ADD TO CART</p>
                        </div>
                    </div>
            <h3 class="card-title p-3">${res[index].title}</h3>
            <p class="card-author fs-6">${res[index].author}</p>
        </div>

            `
        
        }
};


fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
    .then(result => result.json())
    .then(result => bestSellingBook(result));

    let DivBestSellingBook = document.getElementById('best-selling-content');
    function bestSellingBook(result){
        console.log(result);
        DivBestSellingBook.innerHTML += `
        
        <div class="col-lg-6 col-md-12 text-lg-end text-center">
            <img  src="${result.simple_thumb}"  alt="book image">
        </div>

        <div class="col-lg-6 col-md-12  pt-5 ">
            <h4 class="fs-1 fw-bold position-relative line-title mb-5"> Best Selling Books</h4>
            <p class="pt-5 paragraph-color"> By ${result.authors[0].name}</p>
            <h4 class=" my-4 "> ${result.title}</h4>
            <p class="my-5 paragraph-color ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                tempora ducimus  iste facilis 
                ipsum porro reprehenderit earum quibusdam.
            </p>
            <a class="border-0 fw-bold text-decoration-none text-dark" href="#">Shop It Now <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        `
    }





