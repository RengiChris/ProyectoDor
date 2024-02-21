export const posts = [
    {
        id: 0,
        title: '¿Os gusta programar?',
        username: 'ultima_informatica',
        date: '12/17/2023 20:00', /* fecha formato mes/dias/año  */
        tag: 'coding',
        prioridad: 'seguidos',
        thumb: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: 'Tenemos 2x1 en libros de Programación, disponible ya, no dudes en consultar!',
        likes: 1,
        share: 'ejemplo.html',
        comments: [
            {
                usuario: 'leticia',
                thumb: 'https://randomuser.me/api/portraits/women/' + Math.floor(Math.random() * 18 + 1) +  '.jpg',
                comentario:  '¿Qué tal el código?',
            },
            {
                usuario: 'patricia',
                thumb: 'https://randomuser.me/api/portraits/women/' + Math.floor(Math.random() * 18 + 1) +  '.jpg',
                comentario:  'Me encanta!',
            },
            {
                usuario: 'Leonor',
                thumb: 'https://randomuser.me/api/portraits/women/' + Math.floor(Math.random() * 18 + 1) +  '.jpg',
                comentario:  'A mi no me gustó mucho...',
            },
        ]
    },
    {
        id: 1,
        title: 'Bazares Hermanos',
        username: 'bazar_hermanos',
        date: '10/09/2023 23:00',
        tag: 'Bazares',
        prioridad: 'seguidos',
        thumb: 'https://images.unsplash.com/photo-1550534790-5724c29d08f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: 'Tenemos 2x1 en libros de Programación, disponible ya, no dudes en consultar!',
        likes: 0,
        share: 'ejemplo.html',
        comments: [
            {
                usuario: 'leticia',
                thumb: 'https://randomuser.me/api/portraits/women/' + Math.floor(Math.random() * 18 + 1) +  '.jpg',
                comentario:  '¿Qué tal el código?',
            },
            {
                usuario: 'patricia',
                thumb: 'https://randomuser.me/api/portraits/women/' + Math.floor(Math.random() * 18 + 1) +  '.jpg',
                comentario:  'Me encanta!',
            },
            {
                usuario: 'Leonor',
                thumb: 'https://randomuser.me/api/portraits/women/' + Math.floor(Math.random() * 18 + 1) +  '.jpg',
                comentario:  'A mi no me gustó mucho...',
            },
        ]
    },
    {
        id: 2,
        title: 'Compramos tu merchandising de Anime',
        username: 'merchant_bits',
        date: '02/01/2024 20:00', 
        tag: 'Anime',
        prioridad: 'seguidos',
        thumb: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: 'Tenemos 2x1 en libros de Programación, disponible ya, no dudes en consultar!',
        likes: 0,
        share: 'ejemplo.html',
        comments: [ 
            {
                usuario: 'leticia',
                thumb: 'https://randomuser.me/api/portraits/women/' + Math.floor(Math.random() * 18 + 1) +  '.jpg',
                comentario:  '¿Qué tal el código?',
            },
            {
                usuario: 'patricia',
                thumb: 'https://randomuser.me/api/portraits/women/' + Math.floor(Math.random() * 18 + 1) +  '.jpg',
                comentario:  'Me encanta!',
            },
            {
                usuario: 'Leonor',
                thumb: 'https://randomuser.me/api/portraits/women/' + Math.floor(Math.random() * 18 + 1) +  '.jpg',
                comentario:  'A mi no me gustó mucho...',
            },
           
        ]
    },
    {
        id: 3,
        title: 'Descuento del 50% en los merchandising de Evangelion',
        username: 'merchant_bits',
        date: '02/14/2024 18:13', 
        
        tag: 'Anime',
        prioridad: 'recomendados',
        thumb: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: '',
        likes: 0,
        share: 'ejemplo.html',
        comments: [ 
            {
                usuario: 'leticia',
                thumb: 'https://randomuser.me/api/portraits/women/' + Math.floor(Math.random() * 18 + 1) +  '.jpg',
                comentario:  '¿Qué tal el código?',
            },
            {
                usuario: 'patricia',
                thumb: 'https://randomuser.me/api/portraits/women/' + Math.floor(Math.random() * 18 + 1) +  '.jpg',
                comentario:  'Me encanta!',
            },
            {
                usuario: 'Leonor',
                thumb: 'https://randomuser.me/api/portraits/women/' + Math.floor(Math.random() * 18 + 1) +  '.jpg',
                comentario:  'A mi no me gustó mucho...',
            },
           
        ]
    }
];

export const tags = () => {
    let tags = [];
    posts.forEach(post =>{
        if(tags.indexOf(post.tag) === -1) tags.push(post.tag);
    });
    return tags;
}

export const prioridades = () => {
    let prioridades = [];
    posts.forEach(post =>{
        if(prioridades.indexOf(post.prioridad) === -1) prioridades.push(post.prioridad);
    });
    return prioridades;
}

export default posts;