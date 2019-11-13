import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import MailtoUI from "mailtoui/dist/mailtoui-min.js"
import { useRelative } from "../../particles/hooks/useRelative"
import { useSiteMenuData } from "../../particles/hooks/useSiteMenuData"

import HeaderComponent from "./HeaderStyles"

import Logo from "../../../assets/images/logo/logo.svg"
import IconBars from "../../../assets/images/icons/solid/bars.svg"
import IconTimes from "../../../assets/images/icons/solid/times.svg"

function Header() {
  const [menuOpen, toggleMenu] = useState(false)

  const menuData = useSiteMenuData()
  const headerData = menuData.nodes.find(menu => menu.slug === "header-menu")

  useEffect(() => {
    if (typeof window !== `undefined`) {
      MailtoUI.run() // <--- Run MailtoUI manually
    }
  })

  const menuLength = headerData.menuItems.nodes.length
  const lastItem = headerData.menuItems.nodes[menuLength - 1]

  return (
    <HeaderComponent>
      <div className="header__contents">
        <Link to="/" className="header__logo">
          <Logo />
        </Link>
        <nav className={menuOpen ? `header__menu--show` : null}>
          {headerData.menuItems.nodes.map(
            (item, index) => index !== menuLength - 1 && <MenuItem {...item} />
          )}
        </nav>
        <a className="mailtoui" href={lastItem.url}>
          {lastItem.label}
        </a>
        <button onClick={() => toggleMenu(!menuOpen)}>
          <span>{menuOpen ? `Close` : `Open`} Menu</span>
          <span> Navigation</span>
          {menuOpen ? <IconTimes /> : <IconBars />}
        </button>
      </div>
    </HeaderComponent>
  )
}

const MenuItem = ({ url, label }) => {
  const relativeLink = useRelative(url)
  return <Link to={relativeLink}>{label}</Link>
}

export default Header
