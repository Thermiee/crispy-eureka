 
import { ClipLoader } from "react-spinners"

type MainButtonProps = {
  type?: "button" | "submit" | "reset" 
  children?: React.ReactNode
  props?: any
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  disabled?: boolean
  isLoading?: boolean
  style?: React.CSSProperties
}

type TOutlineButton = Omit<MainButtonProps, "type"> & { color?: string }

export const MainButton = ({
  isLoading,
  onClick,
  type = "button",
  children,
  className,
  disabled = false,
  ...props
}: MainButtonProps) => (
  <button
    type={type}
    className={` p-3 h-[41px] text-[16px] text-white justify-center flex items-center rounded-3xl bg-primary font-light border hover:bg-white hover:text-primary ${className} `}
    {...props}
    // style={{
    //   background: `linear-gradient(106deg, #0078FF 23.74%, #0045D8 81.57%) `,
    // }}
    onClick={onClick}
    disabled={disabled}
  >
    {isLoading ? <ClipLoader color="#fff" size="20px" /> : children}
  </button>
)
export const RejectButton = ({
  isLoading,
  onClick,
  type = "button",
  children,
  className,
  disabled = false,
  ...props
}: MainButtonProps) => (
  <button
    type={type}
    className={`w-full p-3 text-sm h-[41px]  text-white rounded-3xl bg-error  font-light hover:text-white ${className} `}
    {...props}
    onClick={onClick}
    disabled={disabled}
  >
    {isLoading ? <ClipLoader color="#fff" size="20px" /> : children}
  </button>
)
export const DisabledButton = ({
  onClick,
  type = "button",
  children,
  className,
  disabled = true,
  ...props
}: MainButtonProps) => (
  <button
    type={type}
    className={`${className} w-full p-3 h-[41px]  text-sm text-white rounded-3xl bg-dark-text font-light  hover:text-white `}
    {...props}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)

export const OutlineButton = ({
  isLoading,
  onClick,
  className,
  children,
  style,
  ...props
}: TOutlineButton) => (
  <button
    type="button"
    className={`text-primary p-3 h-[41px] rounded-3xl border border-primary text-sm hover:text-white hover:bg-primary ${className} `}
    {...props}
    onClick={onClick}
  >
    {isLoading ? <ClipLoader color="#CA1611" size="20px" /> : children}
  </button>
)
