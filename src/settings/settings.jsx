import './Settings.css'
import '../tooltip.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { useTheme, useThemeUpdate } from '../themeContext'
import convertToPdf from './convertToPdf'

function Settings({ tasks }) {
  const themes = useTheme()
  const toggleTheme = useThemeUpdate()

  function changeColor(theme) {
    const buttonCollor = {
      backgroundColor: themes === theme ? 'white' : 'inherit',
      color: themes === theme ? 'black' : 'white',
    }

    const background = {
      backgroundColor: themes === theme ? '#282c34' : '#57585a',
    }

    return { buttonCollor, background }
  }

  function today() {
    const date = new Date()
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
  }

  return (
    <div className="settings">
      <div
        className="appName"
        style={{ color: changeColor('light').buttonCollor.color }}
      >
        My TODO List on {today()}
      </div>
      <div className="DLtoggle" style={changeColor('dark').background}>
        <div
          className="day"
          onClick={() => toggleTheme('light')}
          style={changeColor('light').buttonCollor}
        >
          <FontAwesomeIcon icon={faSun} />
        </div>
        <div
          className="night"
          onClick={() => toggleTheme('dark')}
          style={changeColor('dark').buttonCollor}
        >
          <FontAwesomeIcon icon={faMoon} />
        </div>
      </div>
      <div className="PDFconvert">
        <div
          style={{ color: changeColor('light').buttonCollor.color }}
          onClick={() => convertToPdf(tasks)}
          data-tooltip="Convert to PDF"
        >
          <FontAwesomeIcon icon={faFilePdf} />
        </div>
      </div>
    </div>
  )
}

export default Settings
