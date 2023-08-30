import React from 'react'
import Image from 'next/image'
import { DocsThemeConfig, useConfig, useTheme } from 'nextra-theme-docs'
import { useRouter } from 'next/router'



const config: DocsThemeConfig = {
  logo: () => {
    const { theme, resolvedTheme } = useTheme()

    const isDarkTheme = resolvedTheme === 'dark' || theme === 'dark'
    
    const logoStyles = {
      height: '50px',
      width: '100px',
      filter: isDarkTheme ? 'invert(1)' : 'none',
    }
    return (
      <Image src='/images/DIVE.png' height='50' width='100' alt={'DIVE logo'} />
    )     
  },
  project: {
    link: 'https://github.com/HugoByte/DIVE',
  },
  chat: {
    link: 'https://discord.gg/xrHdMf4s',
  },
  docsRepositoryBase: 'https://github.com/HugoByte/docs',


  useNextSeoProps() {
    const { asPath } = useRouter()
    const { title, frontMatter } = useConfig()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Documentation',

      } 
    } else {
      return {
        title: 'Welcome',
      }
    }
    
  },

  head: () => {
   

    
    return (
      <>
        <link rel="icon" type="image/png" href="/images/DIVEhead.png" hrefLang="en" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="DIVE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/DIVE.png" />
      </>
    )
  },

  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://dive.site" target="_blank">
          DIVE
        </a>
        .
      </span>
    )  
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'Light',
        dark: 'Dark',
        system: 'System'
      }
    }
    
  },
  nextThemes: {
    defaultTheme: 'dark',
    forcedTheme: 'dark',
  }

}

export default config
