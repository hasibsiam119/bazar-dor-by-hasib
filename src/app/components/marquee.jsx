import MarqueeText from 'react-marquee-text';
import "react-marquee-text/dist/styles.css"
import MarqueeCard from './marqueeCard';
const Marquee = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products", { next: { revalidate: 3600 / 2 } })
    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }
    const data = await res.json()
    return (
        <div className='border-b border-gray-200'>
            <MarqueeText direction="right" duration="20">
                {
                    data.map(e => <MarqueeCard key={e.id} e={e}></MarqueeCard>)
                }
            </MarqueeText>
        </div>
    );
};

export default Marquee;