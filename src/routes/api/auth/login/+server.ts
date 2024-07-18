import { redirect } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"
import { SPOTIFY_APP_CLIENT_ID, BASE_URL} from "$env/static/private"

const scope = 'ugc-image-upload user-modify-playback-state user-read-playback-state user-read-currently-playing user-follow-modify user-follow-read user-read-recently-played user-read-playback-position user-top-read playlist-read-collaborative playlist-modify-public playlist-read-private playlist-modify-private app-remote-control streaming user-read-email user-read-private user-library-modify user-library-read'


export const GET: RequestHandler = () => {
  throw redirect(307, `https://accounts.spotify.com/authorize?${
    new URLSearchParams({
      response_type: 'code',
      client_id: SPOTIFY_APP_CLIENT_ID,
      scope,
      redirect_url: `${BASE_URL}/api/auth/callback`
    })
  }`)
}