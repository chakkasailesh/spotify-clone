import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore'

const ArtistDetails = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { id: artistId } = useParams()
  const {
    data: artistData,
    isFetching: isFetchingArtistDetaiils,
    error,
  } = useGetArtistDetailsQuery(artistId)
  console.log(artistId, artistData)
  if (isFetchingArtistDetaiils) return <Loader title="Loading artist details" />
  if (error) return <Error />
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />
      <RelatedSongs
        // data={Object.values(artistData?.songs)}
        data={{}}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  )
}

export default ArtistDetails
