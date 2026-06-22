export default function App() {
  return (
    <div dangerouslySetInnerHTML={{__html: `
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; }
      </style>
    `}} />
  );
}
