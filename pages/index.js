import { isMobile } from 'react-device-detect'

export default function Home() {
    return (
        <div 
            className="container"
            style={{
                position: 'fixed',
                bottom: '0',
                top: '0',
                left: '0',
                right: '0',
                display: 'flex',
                flexWrap: 'wrap-reverse'
            }}
            >
            <div style={{
                flexGrow: 1,
                height : isMobile ? '30%' : '100%'
            }}>
            <iframe
                class="airtable-embed"
                src="https://airtable.com/embed/shrIc9Wxe7GnRs3Hp?backgroundColor=gray&viewControls=off"
                frameborder="0"
                onmousewheel=""
                style={{
                    width : '100%',
                    height: '100%'
                }}
            />
            </div>
            <div style={{
                flexGrow: 4,
                height : isMobile ? '70%' : '100%'
            }}>
            <iframe
                class="airtable-embed"
                src="https://airtable.com/embed/shrkkkgpxxbC8H5Ru?backgroundColor=blue"
                frameborder="0"
                onmousewheel=""
                style={{
                    width: '100%',
                    height: '100%'
                }}
            />
            </div>

        </div>
    )
}
