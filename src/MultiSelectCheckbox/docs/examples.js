import { listItemSelectBuilder } from '../../ListItemSelect';
import { listItemSectionBuilder } from '../../ListItemSection';
import { builderParser } from '../MultiSelectCheckbox';

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
  // 'Logan Chandler',
  // 'Paul Simon',
].map(
  option =>
    `listItemSelectBuilder({
      checkbox: true,
      value: "${option}",
      id: "${option}",
      title: "${option}",
  })`,
);

// personalTrainers.unshift(`
//   listItemSectionBuilder({
//         title: 'Personal Trainers',
//         id: 'personalTrainers',
//       })
//   `);
// const nutritionists = ['Etta Wheeler', 'Robert Ortega'].map(
//   option =>
//     `listItemSelectBuilder({
//       checkbox: true,
//       value: "${option}",
//       id: "${option}",
//       title: "${option}",
//   })`,
// );
//
// nutritionists.unshift(`
//   listItemSectionBuilder({
//         title: 'Nutritionists',
//         id: 'nutritionists',
//       })
//   `);

export const usingBuilders = `
class BuildersExample extends React.Component {
  state = { selectedOptions: ['Christian Mills'] };

  onSelect = optionId  =>
    optionId &&
        this.setState({ selectedOptions: [...this.state.selectedOptions, optionId] });

  onDeselect = optionId =>
    this.setState({
      selectedOptions: this.state.selectedOptions.filter(
        item => item !== optionId,
      ),
    });

  render() {
    const { selectedOptions } = this.state;
    return (
      <MultiSelectCheckbox
        options={[${personalTrainers} , { value: 'Etta Wheeler', id: 'Etta Wheeler' }]}
        selectedOptions={selectedOptions}
        onSelect={this.onSelect}
        onDeselect={this.onDeselect}
      />
    );
  }
}
`;
