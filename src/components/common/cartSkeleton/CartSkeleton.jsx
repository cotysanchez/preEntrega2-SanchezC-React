import { Skeleton } from "@mui/material"

const CartSkeleton = () => {
  return (
     <div style={{ display: 'flex', gap: 20 ,marginLeft: "40px"}}>
          <div>
            <Skeleton variant="rectangular" width={300} height={220} />
            <Skeleton variant="text" width={170} height={50} />
            <Skeleton variant="text" width={120} height={60} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={300} height={220} />
            <Skeleton variant="text" width={170} height={50} />
            <Skeleton variant="text" width={120} height={60} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={300} height={220} />
            <Skeleton variant="text" width={170} height={50} />
            <Skeleton variant="text" width={120} height={60} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={300} height={220} />
            <Skeleton variant="text" width={170} height={50} />
            <Skeleton variant="text" width={120} height={60} />
          </div>
          
    </div>

  )
}
export default CartSkeleton