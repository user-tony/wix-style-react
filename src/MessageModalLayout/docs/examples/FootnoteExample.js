/* eslint-disable */
import React from 'react';
import Checkbox from "../../../Checkbox";

class FootnoteExample extends React.Component {
  render() {
    return (
      <MessageModalLayout
        primaryButtonText="Leave"
        primaryButtonOnClick={this.closeModal}
        secondaryButtonText="Cancel"
        secondaryButtonOnClick={this.closeModal}
        onCloseButtonClick={this.closeModal}
        title="Leave without saving?"
        sideActions={(<Checkbox>Don't show this again</Checkbox>)}
        illustration={"marketing_illustration.png"}
        footnote={
          <>
            <Text size="small">By sending an invite, you agree to the{'\u00A0'}</Text>
            <TextButton size="small">Wix Terms of Use.</TextButton>
          </>
        }
      >
        <Text>
          Are you sure you want to leave this page? Your changes won't be saved.
        </Text>
      </MessageModalLayout>
    )
  }
}
