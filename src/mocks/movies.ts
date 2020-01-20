export interface IMovie {
  id: number
  title: string
  previewImage: string
  previewVideo: string
  genre: string
}

export const movies: IMovie[] = [
  {
    id: 1,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewVideo: 'https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4',
    genre: 'Fantasy'
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    previewImage: 'img/bohemian-rhapsody.jpg',
    previewVideo: 'https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4',
    genre: 'Drama'
  },
  {
    id: 3,
    title: 'Macbeth',
    previewImage: 'img/macbeth.jpg',
    previewVideo: 'https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4',
    genre: 'Drama'
  },
  {
    id: 4,
    title: 'Aviator',
    previewImage: 'img/aviator.jpg',
    previewVideo: 'https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4',
    genre: 'Drama'
  },
  {
    id: 5,
    title: 'We need to talk about Kevin',
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    previewVideo: 'https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4',
    genre: 'Drama'
  }
]
