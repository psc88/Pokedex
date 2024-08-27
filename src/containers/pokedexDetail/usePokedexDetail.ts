import { useEffect, useState } from 'react'
import { useConsumerContext } from '../../context/useConsumerContext'
import { useNavigate, useParams } from 'react-router-dom'

export const usePokedexDetail = () => {
  const [pokeSelected, setpokeSelected] = useState<any>()
  const { pokemonsList } = useConsumerContext()
  const { pokeId } = useParams()
  const navigate = useNavigate()

  const searchPokemon = () => {
    console.log({ pokemonsList, pokeId })

    setpokeSelected(
      pokemonsList.find((element) => element.id === parseInt(pokeId!))
    )
  }

  useEffect(() => {
    searchPokemon()
  }, [])

  return {
    pokeSelected,
    navigate
  }
}
