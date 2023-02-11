import { Stack } from '@mui/system'
import { Products } from '../index'
import { Category } from '../Category/Category'

export const HomePage = () => {
  return (
    <Stack>
      <>
        <Category/>
        <Products />
      </>
    </Stack>
  )
}
