import {
  Heading,
  ContextualAlert as Message,
} from '@dts-stn/service-canada-design-system'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { WebTranslations } from '../../i18n/web'
import { useTranslation } from '../Hooks'
import { Header } from './Header'
import { Footer } from './Footer'
import { Head } from './Head'
import { CTA } from '../ResultsPage/CTA'
import { Date } from './Date'

export const Layout: React.VFC<{
  children: React.ReactNode
  title: string
}> = ({ children, title }) => {
  const router = useRouter()

  // basically returns 'results' or 'resultats' IF, otherwise index or questions in the other locale.
  const langToggleLink =
    router.asPath === '/results' && router.locale === 'en'
      ? '/fr/resultats'
      : router.asPath === '/resultats' && router.locale === 'fr'
      ? '/en/results'
      : router.locale === 'en'
      ? `/fr${router.asPath}`
      : `/en${router.asPath}`

  const tsln = useTranslation<WebTranslations>()

  const menuProps = {
    onSignOut: () => {},
    isAuthenticated: true,
    signOutPath: '/',
    dashboardPath: '/',
    securityPath: '/',
    profilePath: '/',
    craPath: '/',
    hasNoMenu: true,
  }

  const topnavProps = {
    skipToMainPath: '#applicationTitle',
    skipToAboutPath: '#footer-info',
    switchToBasicPath: '',
    displayAlternateLink: false,
  }

  const searchProps = {
    onChange: () => {},
    onSubmit: () => {},
  }

  const breadcrumbsArr =
    process.env.APP_ENV === 'production'
      ? [
          {
            text: tsln.breadcrumb1Title,
            link: tsln.breadcrumb1URL,
          },
          {
            text: tsln.breadcrumb2Title,
            link: tsln.breadcrumb2URL,
          },
          {
            text: tsln.breadcrumb3Title,
            link: tsln.breadcrumb3URL,
          },
          {
            text: tsln.breadcrumb4Title,
            link: tsln.breadcrumb4URL,
          },
        ]
      : [
          {
            text: tsln.breadcrumb1aTitle,
            link: tsln.breadcrumb1aURL,
          },
          {
            text: tsln.breadcrumb2aTitle,
            link: tsln.breadcrumb2aURL,
          },
        ]

  const [breadcrumbs, setBreadcrumbsArr] = useState(breadcrumbsArr)
  const [shouldAddItem, setShouldAddItem] = useState<boolean>(true)

  useEffect(() => {
    if (router.pathname === '/questions' && shouldAddItem) {
      setBreadcrumbsArr((prevFriends) => [
        ...prevFriends,
        {
          text: tsln.breadcrumb6Title,
          link: tsln.breadcrumb6URL,
        },
      ])
      setShouldAddItem(false)
    } else if (
      (router.pathname === '/results' || router.pathname === '/resultats') &&
      shouldAddItem
    ) {
      setBreadcrumbsArr((prevFriends) => [
        ...prevFriends,
        {
          text: tsln.breadcrumb6Title,
          link: tsln.breadcrumb6URL,
        },
        {
          text: tsln.breadcrumb7Title,
          link: tsln.breadcrumb7URL,
        },
      ])
      setShouldAddItem(false)
    }
  }, [
    breadcrumbs,
    router.pathname,
    shouldAddItem,
    tsln.breadcrumb6Title,
    tsln.breadcrumb6URL,
    tsln.breadcrumb7Title,
    tsln.breadcrumb7URL,
  ])

  const handleOnClick = () => {
    const link = `https://retraite-retirement.service.canada.ca/${router.locale}/home`
    router.push(link)
  }

  const dateModified = process.env.NEXT_BUILD_DATE
    ? process.env.NEXT_BUILD_DATE.replaceAll('-', '')
    : '20230101'

  return (
    <>
      <Head title={title} />
      {/* <TestBanner /> */}
      <main className="mainContent">
        <div className="xs:container s:container md:container lg:container mx-0 flex flex-col mb-16 mt-8">
          <Header
            id="header"
            locale={router.locale}
            langUrl={langToggleLink}
            breadcrumbItems={breadcrumbs}
            headerText={{
              skipToMainContent: tsln.skipToMainContent,
              globalHeader: tsln.globalHeader,
              testSiteNotice: tsln.testSiteNotice,
              officialSiteNavigation: tsln.officialSiteNavigation,
              languageSelection: tsln.languageSelection,
              logoAltText: tsln.logoAltText,
            }}
          />
          <Heading
            id="applicationTitle"
            title={title}
            className="mb-8 mt-4 sm:mt-12 sm:w-[100%]"
          />
          <div className="mb-6">
            <Message
              id={'wip'}
              alert_icon_id={'testkey'}
              alert_icon_alt_text={tsln.warningText}
              type={'info'}
              message_heading={tsln.workInProgress}
              message_body={tsln.workInProgressBody}
              whiteBG={true}
              asHtml={true}
            />
          </div>
          {children}
        </div>

        {(router.pathname === '/results' ||
          router.pathname === '/resultats') && (
          <div id="cta-feedback" className="mb-8">
            <CTA
              heading={tsln.resultsPage.CTATitle}
              body={tsln.resultsPage.CTABody}
              containerClass="xs:container"
              ButtonProps={{
                text: tsln.resultsPage.CTAButton,
                onClick: handleOnClick,
              }}
            />
          </div>
        )}

        <div className="xs:container s:container md:container lg:container my-8">
          <Date date={dateModified} label={tsln.dateModified} />
        </div>

        <Footer id="footer" locale={router.locale} />
      </main>
    </>
  )
}
