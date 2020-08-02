import { listItemSelectBuilder } from '../../ListItemSelect';
import { listItemSectionBuilder } from '../../ListItemSection';

export const options = [
  'Alabama',
  'Arkansas',
  'California',
  'New York',
  'Ohio',
  'Texas',
  'Utah',
  'Washington',
].map(state => ({ value: state, id: state }));

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

const personalTrainers = [
  'Christian Mills',
  'Logan Chandler',
  'Paul Simon',
].map(
  option =>
    `listItemSelectBuilder({
      checkbox: true,
      value: "${option}",
      id: "${option}",
      title: "${option}",
      selected: this.state.selectedOptions.indexOf("${option}") !== -1
  })`,
);

personalTrainers.unshift(`
  listItemSectionBuilder({
        title: 'Personal Trainers',
      })
  `);

const nutritionists = ['Etta Wheeler', 'Robert Ortega'].map(
  option =>
    `listItemSelectBuilder({
      checkbox: true,
      value: "${option}",
      id: "${option}",
      title: "${option}",
      selected: this.state.selectedOptions.indexOf("${option}") !== -1
  })`,
);

nutritionists.unshift(`
  listItemSectionBuilder({
        title: 'Nutritionists',
      })
  `);

export const usingBuilders = `
class BuildersExample extends React.Component {
  state = { selectedOptions: [] };

  onSelect = optionId  =>
    optionId &&
        this.setState({ selectedOptions: [...this.state.selectedOptions, optionId] });

  onDeselect = optionId =>
    this.setState({
      selectedOptions: this.state.selectedOptions.filter(
        item => item !== optionId,
      ),
    });

  valueParser = ({ value }) => {
    const { title } = value({ hovered: true }).props;
    return title;
  }

  render() {
    const { selectedOptions } = this.state;
    return (
      <MultiSelectCheckbox
        options={[${personalTrainers} , ${nutritionists}]}
        selectedOptions={selectedOptions}
        onSelect={this.onSelect}
        onDeselect={this.onDeselect}
        valueParser={this.valueParser}
      />
    );
  }
}
`;
