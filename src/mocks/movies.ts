export interface IMovie {
  id: number
  title: string
  previewImage: string
  previewVideoLink: string
  videoLink: string
}

export const movies: IMovie[] = [
  {
    id: 1,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewVideoLink: 'https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4',
    videoLink: `movie-page.html`
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    previewImage: 'img/bohemian-rhapsody.jpg',
    previewVideoLink: 'https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4',
    videoLink: `movie-page.html`
  },
  {
    id: 3,
    title: 'Macbeth',
    previewImage: 'img/macbeth.jpg',
    previewVideoLink: 'https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4',
    videoLink: `movie-page.html`
  },
  {
    id: 4,
    title: 'Aviator',
    previewImage: 'img/aviator.jpg',
    previewVideoLink: 'https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4',
    videoLink: `movie-page.html`
  },
  {
    id: 5,
    title: 'We need to talk about Kevin',
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    previewVideoLink: 'https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4',
    videoLink: `movie-page.html`
  }
]
