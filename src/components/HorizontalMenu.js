import { useRef, useState, useEffect } from "react";

const HorizontalMenu = ({ navItem }) => {
    const scrollRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    // Scroll one item to the left every 4 seconds
    useEffect(() => {
        const scrollInterval = setInterval(() => {
            // Calculate the width of one item
            const itemWidth = scrollRef.current?.children[0]?.offsetWidth || 0;

            // Scroll by one item width
            setScrollPosition(prevPosition => {
                const newPosition = prevPosition + itemWidth;
                return newPosition >= itemWidth * navItem.length ? 0 : newPosition;
            });
        }, 500); // 4 seconds interval

        return () => clearInterval(scrollInterval); // Cleanup on unmount
    }, [navItem.length]);

    useEffect(() => {
        if(scrollRef.current) {
            scrollRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth", //smooth scrolling
            });
        }
    }, [scrollPosition]);

    return (
        <div className="relative flex items-center overflow-hidden">
            {/* Left Arrow */}
            <button
                className="absolute left-0 z-10 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-all"
                onClick={() => {
                    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
                }}
                style={{ transform: "translateY(-50%)", top: "50%" }}
            >
                ◀
            </button>

            {/* Scrolling Menu with Infinite Scroll */}
            <div
                ref={scrollRef}
                className="whitespace-nowrap flex gap-4 px-12 scrollbar-hide"
                style={{
                    animation: "scroll 20s linear infinite",
                }}
            >
                {/* Duplicate the navItems to make it loop seamlessly */}
                {navItem.concat(navItem).map((item, index) => (
                    <div key={index} className="inline-block px-4 py-2 bg-gray-100 rounded text-black">
                        <img
                        src={item.imageURL} alt={item.name}
                        />
                        {item.name}
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <button
                className="absolute right-0 z-10 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-all"
                onClick={() => {
                    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
                }}
                style={{ transform: "translateY(-50%)", top: "50%" }}
            >
                ▶
            </button>
        </div>
    );
};

export default HorizontalMenu;
