const books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960,
    },
    {
      title: '1984',
      author: 'George Orwell',
      year: 1949,
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      year: 1813,
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      year: 1951,
    },
  ];


  function bookdetails(books)
  {
        let arr=[];
       books.map((item)=>{
            arr.push(item.title)
       })

       logtitledetails(arr)
       

  }

  function logtitledetails(arr)
  {
            let result=arr.sort();
            console.log(result);

        //   for(let i of result)
        //   {
        //     console.log(i);
        //   }

        //   output :-

        //   1984
        // Pride and Prejudice
        // The Catcher in the Rye
        // The Great Gatsby
        // To Kill a Mockingbird
  }

  bookdetails(books,logtitledetails)

// bookdetails(books)