import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
        <iframe 
            class="airtable-embed" 
            src="https://airtable.com/embed/shrkkkgpxxbC8H5Ru?backgroundColor=blue" 
            frameborder="0" 
            onmousewheel="" 
            width="100%" 
            height="100%" 
            style={{
                background: 'transparent', 
                border: '1px solid #ccc',
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0'
            }}
        />
    </div>
  )
}
