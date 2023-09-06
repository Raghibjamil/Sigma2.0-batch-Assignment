let createBook=(title,author,printyear)=>{
  return {
  authorbook:author,
   titlebook:title,
   printyearbook:printyear
  };
}
const bookList = [
    createBook('To Kill a Mockingbird', 'Harper lee', 1960),
    createBook('The Great Gatsby', 'F. Scott Fitzgerald', 2015),
    createBook('Pride and Prejudice', 'Jane Austen', 1813),
    createBook('The Hunger Games', 'Suzanne Collins', 2012),
    createBook('The Lord of the Rings', 'J.R.R. Tolkien', 1954),
  ];

  // console.log(bookList);

  function main_container(bookList)
  {

  let filterbook=bookList.filter((item)=>{
      return item.printyearbook <2010;
  })
    // console.log(filterbook);
    // console.log('....................');
  filterbook.map((item)=>
  { 
    item.authorbook=item.authorbook.toUpperCase();
    console.log(item);

  })
  }
  main_container(bookList)