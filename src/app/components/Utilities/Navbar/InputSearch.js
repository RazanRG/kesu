"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"

const InputSearch = () => {
    return (
      <div>
        <input placeholder="cari apa..." className="" />
        <button className="">
        <MagnifyingGlass size={32} />
        </button>
      </div>
    )
}

export default InputSearch