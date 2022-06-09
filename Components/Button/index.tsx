import React, { useCallback, useState } from 'react'

import { twCascade } from '@mariusmarais/tailwind-cascade'

import { Text } from '../Text'
import { LocaleString } from '../locales'
import BeatLoader from '../../node_modules/react-spinners/BeatLoader'

type ButtonProps = {
  loading?: boolean
  id?: string
  disabled?: boolean
  beatLoaderSize?: number
  textid?: LocaleString
  className?: any
  children?: any
  type?: 'submit' | 'button' | 'reset'
  onclick?: any
  onClick?: any
  showAsyncLoad?: any
  style?: any
}

export function Button(props: ButtonProps) {
  const propsNew = { ...props }
  delete propsNew['loading']
  delete propsNew['beatLoaderSize']

  const [asyncLoading, setLoading] = useState(false)
  const onClickHandler = useCallback(
    async (...arg) => {
      setLoading(true)
      try {
        await props?.onclick?.(arg)
      } finally {
        setLoading(false)
      }
    },
    [props]
  )

  return (
    <>
      <button
        type='submit'
        onClick={onClickHandler}
        {...propsNew}
        className={twCascade(
          `flex justify-center items-center  text-xs font-medium rounded shadow-sm text-white  border-2 font-bold px-4  py-2  rounded-md hover:font-bold  focus:outline-none text-sm px-4 px-16  py-3 font-bold  text-white  
 `,
          props.disabled
            ? 'bg-gray-500 cursor-not-allowed hover:border-gray-400'
            : 'bg-primary cursor-pointer hover:border-primary',

          props.className
        )}
        disabled={
          props?.loading ||
          props?.disabled ||
          (props?.showAsyncLoad && asyncLoading)
        }
      >
        {props?.loading || (props.showAsyncLoad && asyncLoading) ? (
          <BeatLoader size={props?.beatLoaderSize || 11} color='#fff' />
        ) : props?.textid ? (
          <Text id={props?.textid} />
        ) : props?.children ? (
          props?.children
        ) : null}
      </button>
    </>
  )
}

export function CancelButton(props: ButtonProps) {
  const propsNew = { ...props }
  delete propsNew['loading']
  delete propsNew['beatLoaderSize']

  return (
    <>
      <button
        {...propsNew}
        className={twCascade(
          `flex justify-center items-center  text-xs font-medium rounded shadow-sm text-primary border-primary border-2 font-bold px-4  py-2  rounded-md   focus:outline-none text-sm px-16 py-3 font-bold  text-white
 `,
          props.className
        )}
      >
        {props?.loading ? (
          <BeatLoader loading size={props?.beatLoaderSize || 11} color='#fff' />
        ) : props?.textid ? (
          <Text id={props?.textid} />
        ) : props?.children ? (
          props?.children
        ) : null}
      </button>
    </>
  )
}

export function TextButton(props: ButtonProps) {
  const propsNew = { ...props }
  delete propsNew['loading']
  delete propsNew['beatLoaderSize']

  const [asyncLoading, setLoading] = useState(false)
  const onClickHandler = useCallback(
    async (...arg) => {
      setLoading(true)
      try {
        await props?.onclick?.(arg)
      } finally {
        setLoading(false)
      }
    },
    [props]
  )

  return (
    <>
      <div
        onClick={onClickHandler}
        className={twCascade(
          `  text-xs font-medium px-4  shadow-sm text-white hover:border-primary border-2 font-bold  hover:font-bold  focus:outline-none text-sm  font-bold  text-white  
 `,
          props.disabled
            ? 'bg-gray-500 cursor-not-allowed'
            : 'bg-primary cursor-pointer',

          props.className
        )}
        disabled={
          props?.loading ||
          props?.disabled ||
          (props?.showAsyncLoad && asyncLoading)
        }
        {...propsNew}
      >
        {props?.loading || (props.showAsyncLoad && asyncLoading) ? (
          <BeatLoader size={props?.beatLoaderSize || 11} color='#000' />
        ) : props?.textid ? (
          <Text id={props?.textid} />
        ) : props?.children ? (
          props?.children
        ) : null}
      </div>
    </>
  )
}
