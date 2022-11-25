/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('../assets/icons/icon.svg')",
      },
      backgroundColor: {
        body: {
          light: {
            100: '#F3F9F9',
            200: '#EAEDF0',
          },
          dark: '#23292C',
        },
      },
      colors: {
        brand: {
            base: '#338896',
            hover: '#3FA7B8',
            text: '#F7F7F7',
          },
        header: {
          dark: '#202020',
          light: '#f7f7f7',
          gold: '#C98E26',
        },
        paragraph: {
          dark: '#353535',
          light: {
            100: '#A1a1a1',
            200: '#727272',
          },
        },
        btn: {
          primary: {
            base: '#338896',
            hover: '#3FA7B8',
            loading: '#338896e6 ',
            disabled: '#33889680',
          },
          secondary: {
            base: '#424245',
            hover: '#5C5C5C',
            loading: '#424245e6',
            disabled: '#42424580',
          },
          cancel: {
            base: '#E24B2D',
            hover: '#F2664A',
            loading: '#E24B2DE6',
            disabled: '#E24B2D80',
          },
          text: '#F7F7F7',
          inactive: '#F7F7F780',
        },
        input: {
          base: '#f7F7F7',
          readonly: '#D2D2D2',
          border: '#D2D2D2',
          focus: '#3FA7B8',
          text: '#353535',
          placeholder: '#727272',
          inactive: '#A8A8A8',
          error: '#FF5959',
        },
        icon: {
          light: '#ffffff',
          gold: '#C98E26',
          dark: {
            100: '#777777',
            200: '#353535',
          },
        },
        
      },
    },
  },
  plugins: [],
};
