export interface Movie {
  id: number
  title: string
  previewImage: string
  videoLink: string
}

export const movies: Movie[] = [
  {
    id: 1,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    videoLink: '#/'
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    previewImage: 'img/bohemian-rhapsody.jpg',
    videoLink: '#/'
  },
  {
    id: 3,
    title: 'Macbeth',
    previewImage: 'img/macbeth.jpg',
    videoLink: '#/'
  },
  {
    id: 4,
    title: 'Aviator',
    previewImage: 'img/aviator.jpg',
    videoLink: '#/'
  },
  {
    id: 5,
    title: 'We need to talk about Kevin',
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    videoLink: '#/'
  }
]
