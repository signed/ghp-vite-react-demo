export type CityProps = { name: string; url: string }

export const City = (props: CityProps) => {
  const { url, name } = props
  return (
    <li>
      <a href={url} target={'_blank'} rel={'noreferrer'}>
        {name}
      </a>
    </li>
  )
}
