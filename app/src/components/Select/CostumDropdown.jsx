// import React from 'react';
// import Select from 'react-select';
// import { DropdownIcon } from '../../styles/DropdownIcon';

// // Define option sets
// const serviceOptions = [
//   { value: 'Sidewalk Shed', label: 'Sidewalk Shed' },
//   { value: 'Scaffold', label: 'Scaffold' },
//   { value: 'Shoring', label: 'Shoring' },
// ];

// const statusOptions = [
//   { value: 'Completed', label: 'Completed' },
//   { value: 'In Progress', label: 'In Progress' },
//   { value: 'On Hold', label: 'On Hold' },
// ];

// // Define color maps for service options and status options
// const serviceColors = {
//   'Sidewalk Shed': '#67AA3C',
//   Scaffold: '#EFD652',
//   Shoring: '#9640BE',
// };

// const statusColors = {
//   Completed: '#7AC14D',
//   'In Progress': '#B3D99B',
//   'On Hold': '#ECDE7C',
// };

// // Custom styles to match the given designs
// const customStyles = customColor => ({
//   option: (provided, state) => {
//     const colorMap =
//       state.data.value in serviceColors ? serviceColors : statusColors;
//     const bgColor = state.isSelected ? colorMap[state.data.value] : 'white';
//     const color = state.isSelected ? 'white' : 'black';
//     return {
//       ...provided,
//       color,
//       backgroundColor: bgColor,
//       ':hover': {
//         backgroundColor: colorMap[state.data.value],
//         color: 'white',
//       },
//     };
//   },
//   control: provided => ({
//     ...provided,
//     borderRadius: '5px',
//     backgroundColor: '#F5F5F7',
//     border: 'none',
//   }),
//   menu: provided => ({
//     ...provided,
//     position: 'absolute', // Position the menu absolutely
//     zIndex: 2, // Ensure it appears above other elements
//     borderRadius: '5px',
//     marginTop: '0', // Prevent extra space
//   }),
//   menuList: provided => ({
//     ...provided,
//     padding: 0,
//   }),
//   multiValue: provided => ({
//     ...provided,
//     backgroundColor: 'blue',
//     color: 'white',
//   }),
//   multiValueLabel: provided => ({
//     ...provided,
//     backgroundColor: 'red',
//     color: 'white',
//   }),
//   multiValueRemove: (provided, state) => ({
//     ...provided,
//     color: 'white',
//     ':hover': {
//       backgroundColor: customColor,
//       color: 'white',
//     },
//   }),
// });

// export const CustomDropdown = ({
//   optionsType,
//   isMulti,
//   customColor,
//   ...props
// }) => {
//   const options = optionsType === 'category' ? serviceOptions : statusOptions;

//   return (
//     <Select
//       {...props}
//       options={options}
//       isMulti={isMulti}
//       styles={customStyles(customColor)}
//       placeholder='Select...'
//       components={{
//         IndicatorSeparator: () => null,
//         DropdownIndicator: () => (
//           <span style={{ padding: '0 10px' }}>
//             <DropdownIcon />
//           </span>
//         ),
//       }}
//     />
//   );
// };
import React from 'react';
import Select from 'react-select';

// Example options with colors
const serviceOptions = [
  { value: 'Sidewalk Shed', label: 'Sidewalk Shed', color: '#67AA3C' },
  { value: 'Scaffold', label: 'Scaffold', color: '#EFD652' },
  { value: 'Shoring', label: 'Shoring', color: '#9640BE' },
];

const statusOptions = [
  { value: 'Completed', label: 'Completed', color: '#7AC14D' },
  { value: 'In Progress', label: 'In Progress', color: '#B3D99B' },
  { value: 'On Hold', label: 'On Hold', color: '#ECDE7C' },
];

// Custom styles to match the given designs
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? state.data.color : 'white',
    color: state.isSelected ? 'white' : state.data.color,
    ':hover': {
      backgroundColor: state.data.color,
      color: 'white',
    },
  }),
  control: provided => ({
    ...provided,
    borderRadius: '5px',
    backgroundColor: '#F5F5F7',
    border: 'none',
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '5px',
    marginTop: '0',
    zIndex: 2, // Ensure it appears above other elements
  }),
  menuList: provided => ({
    ...provided,
    padding: 0,
  }),
  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: state.data.color,
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: 'white',
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    color: 'white',
    ':hover': {
      backgroundColor: 'red',
      color: 'white',
    },
  }),
};

export const CustomDropdown = ({
  optionsType,
  isMulti,
  isDisabled,
  ...props
}) => {
  const options = optionsType === 'category' ? serviceOptions : statusOptions;

  return (
    <Select
      {...props}
      options={options}
      isMulti={isMulti}
      styles={customStyles}
      isDisabled={isDisabled}
      placeholder='Select...'
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
};
