import youtube from './../img/youtube-logo.svg'
import twitch from './../img/twitch-logo.svg'
import periscope from './../img/periscope-logo.svg'

export const logos = {
  'youtube': youtube,
  'twitch': twitch,
  'periscope': periscope
}

export const display = {
  'youtube': 'Youtube Live',
  'twitch': 'Twitch',
  'periscope': 'Periscope'
}

export const urlParams = (query, platform) => {
  switch(platform) {
    case 'youtube':
      return query.yt
    case 'twitch':
      return query.t
    case 'periscope':
      return query.p
    default:
      return null
  }
}
