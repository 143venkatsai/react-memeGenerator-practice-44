import {Component} from 'react'

import {
  AppContainer,
  Heading,
  MemeAndFormContainer,
  MemeContainer,
  MemeText,
  FormContainer,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  CustomButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeOptionId: fontSizesOptionsList[0].optionId,
    topText: '',
    bottomText: '',
    backgroundImage: '',
    activeOption: '',
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      activeOptionId,
    } = this.state

    this.setState({
      backgroundImage: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeOption: activeOptionId,
    })
  }

  onChangeBackgroundImage = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({activeOptionId: event.target.value})
  }

  renderFormContainer = () => {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      activeOptionId,
    } = this.state
    return (
      <FormContainer onSubmit={this.onSubmitForm}>
        <CustomLabel htmlFor="backgroundImageUrl">Image Url</CustomLabel>
        <CustomInput
          id="backgroundImageUrl"
          type="text"
          value={imageUrlInput}
          onChange={this.onChangeBackgroundImage}
          placeholder="Enter the Image Url"
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          id="topText"
          type="text"
          value={topTextInput}
          onChange={this.onChangeTopText}
          placeholder="Enter the Top Text"
        />
        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          id="bottomText"
          type="text"
          value={bottomTextInput}
          onChange={this.onChangeBottomText}
          placeholder="Enter the Bottom Text"
        />
        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          value={activeOptionId}
          onChange={this.onChangeFontSize}
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <CustomButton type="submit">Generate</CustomButton>
      </FormContainer>
    )
  }

  renderMemeContainer = () => {
    const {backgroundImage, topText, bottomText, activeOption} = this.state

    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImage}>
        <MemeText activeOption={activeOption}>{topText}</MemeText>
        <MemeText activeOption={activeOption}>{bottomText}</MemeText>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <Heading>Meme Generator</Heading>
        <MemeAndFormContainer>
          {this.renderMemeContainer()}
          {this.renderFormContainer()}
        </MemeAndFormContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
