import { listItemSelectBuilder } from '../../ListItemSelect';

const statesArray = [
  'Alabama',
  'Arkansas',
  'California',
  'New York',
  'Ohio',
  'Texas',
  'Utah',
  'Washington',
];

export const options = statesArray.map(state => ({ value: state, id: state }));

export const simple = `
class Example extends React.Component {
  state = { selectedOptions: ['Alabama', 'California'] };

  onSelect = option => this.setState({selectedOptions: [...this.state.selectedOptions, option]});

  onDeselect = option => this.setState({selectedOptions: this.state.selectedOptions.filter(item => item !== option)});

  render() {
    const { selectedOptions } = this.state;
    return (
      <MultiSelectCheckbox
        options={${JSON.stringify(options)}}
        selectedOptions={selectedOptions}
        onSelect={this.onSelect}
        onDeselect={this.onDeselect}
      />
    );
  }
}
`;

export const builderOptions = statesArray.map(
  option =>
    `listItemSelectBuilder({
      checkbox: true,
      value: "${option}",
      id: "${option}",
      title: "${option}",
      selected: this.state.selectedOptions.indexOf("${option}") !== -1
  })`,
);

export const usingBuilders = `
class BuildersExample extends React.Component {
  state = { selectedOptions: [] };
  onSelect = option =>
    this.setState({ selectedOptions: [...this.state.selectedOptions, option] });
  onDeselect = option =>
    this.setState({
      selectedOptions: this.state.selectedOptions.filter(
        item => item !== option,
      ),
    });
  render() {
    const { selectedOptions } = this.state;
    return (
      <MultiSelectCheckbox
        options={[${builderOptions}]}
        selectedOptions={selectedOptions}
        onSelect={this.onSelect}
        onDeselect={this.onDeselect}
      />
    );
  }
}


`;
