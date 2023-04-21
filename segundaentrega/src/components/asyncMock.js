const products = [
    {
        id:'1',
        name: 'phone',
        price: 1000,
        category: 'celular',
        img:'https://www.bing.com/images/search?view=detailV2&ccid=Hg9a%2b43%2b&id=836EF4FAA4508F14F51B6526E4C218BAE4909C87&thid=OIP.Hg9a-43-FKhjd_U5SL7hBwHaHa&mediaurl=https%3a%2f%2f1.bp.blogspot.com%2f-aVjDWGAbFiM%2fWVC9DcG743I%2fAAAAAAAAk0g%2f8eS-UcjaMjYqUoYk0lwiBXIZ0g6nJVLjQCLcBGAs%2fs1600%2fsite-de-compras-pela-internet-celular_89-1.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.1e0f5afb8dfe14a86377f53948bee107%3frik%3dh5yQ5LoYwuQmZQ%26pid%3dImgRaw%26r%3d0&exph=1200&expw=1200&q=celular&simid=608032954304627933&FORM=IRPRST&ck=09AC166AF7745D77D3EE129A8D145E7F&selectedIndex=0',
        stock: 25,
        description: 'celu lg'
    },
    {
        id:'2',
        name: 'phone',
        price: 1000,
        category: 'celular',
        img:'https://www.bing.com/images/search?view=detailV2&ccid=Hg9a%2b43%2b&id=836EF4FAA4508F14F51B6526E4C218BAE4909C87&thid=OIP.Hg9a-43-FKhjd_U5SL7hBwHaHa&mediaurl=https%3a%2f%2f1.bp.blogspot.com%2f-aVjDWGAbFiM%2fWVC9DcG743I%2fAAAAAAAAk0g%2f8eS-UcjaMjYqUoYk0lwiBXIZ0g6nJVLjQCLcBGAs%2fs1600%2fsite-de-compras-pela-internet-celular_89-1.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.1e0f5afb8dfe14a86377f53948bee107%3frik%3dh5yQ5LoYwuQmZQ%26pid%3dImgRaw%26r%3d0&exph=1200&expw=1200&q=celular&simid=608032954304627933&FORM=IRPRST&ck=09AC166AF7745D77D3EE129A8D145E7F&selectedIndex=0',
        stock: 25,
        description: 'celu lg'
    },
    {
        id:'3',
        name: 'phone',
        price: 1000,
        category: 'celular',
        img:'https://www.bing.com/images/search?view=detailV2&ccid=Hg9a%2b43%2b&id=836EF4FAA4508F14F51B6526E4C218BAE4909C87&thid=OIP.Hg9a-43-FKhjd_U5SL7hBwHaHa&mediaurl=https%3a%2f%2f1.bp.blogspot.com%2f-aVjDWGAbFiM%2fWVC9DcG743I%2fAAAAAAAAk0g%2f8eS-UcjaMjYqUoYk0lwiBXIZ0g6nJVLjQCLcBGAs%2fs1600%2fsite-de-compras-pela-internet-celular_89-1.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.1e0f5afb8dfe14a86377f53948bee107%3frik%3dh5yQ5LoYwuQmZQ%26pid%3dImgRaw%26r%3d0&exph=1200&expw=1200&q=celular&simid=608032954304627933&FORM=IRPRST&ck=09AC166AF7745D77D3EE129A8D145E7F&selectedIndex=0',
        stock: 25,
        description: 'celu lg'
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
        resolve(products)
    }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === productId))
        })
    }, 500)
}

export const getProductByCategory = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.category === productId))
        })
    }, 500)
}