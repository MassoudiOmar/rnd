import React, { useCallback, memo, useRef, useState } from "react";
import {
    FlatList,
    View,
    Dimensions,
    StyleSheet,
    Image,
} from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
    slide: {
        height: "100%",
        width: windowWidth,
        justifyContent: "center",
        alignItems: "center",
    },
    slideImage: { width: windowWidth * 0.8, height: windowHeight },

    pagination: {
        position: "absolute",
        bottom: 8,
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
    },
    paginationDot: {
        width: 9,
        height: 9,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    paginationDotActive: { backgroundColor: "#88CDDE" },
    paginationDotInactive: { backgroundColor: "#D4E0E3" },

    carousel: { flex: 1 },
});

const slideList = Array.from({ length: 4 }).map((_, i) => {
    return {
        id: i,
        image: `https://picsum.photos/1440/2842?random=${i}`,
        title: `This is the title ${i + 1}!`,
        subtitle: `This is the subtitle ${i + 1}!`,
    };
});

const Slide = memo(function Slide({ data }) {
    return (
        <View style={styles.slide}>
            <Image source={(require('../assets/carousel.png'))} resizeMode="contain"
                style={styles.slideImage}></Image>
        </View>
    );
});

function Pagination({ index }) {
    return (
        <View style={styles.pagination} pointerEvents="none">
            {slideList.map((_, i) => {
                return (
                    <View
                        key={i}
                        style={[
                            styles.paginationDot,
                            index === i
                                ? styles.paginationDotActive
                                : styles.paginationDotInactive,
                        ]}
                    />
                );
            })}
        </View>
    );
}

export default function Carousel() {
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;
    const onScroll = useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);

        const distance = Math.abs(roundIndex - index);

       
        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
            setIndex(roundIndex);
        }
    }, []);

    const flatListOptimizationProps = {
        initialNumToRender: 0,
        maxToRenderPerBatch: 1,
        removeClippedSubviews: true,
        scrollEventThrottle: 16,
        windowSize: 2,
        keyExtractor: useCallback(s => String(s.id), []),
        getItemLayout: useCallback(
            (_, index) => ({
                index,
                length: windowWidth,
                offset: index * windowWidth,
            }),
            []
        ),
    };

    const renderItem = useCallback(function renderItem({ item }) {
        return <Slide data={item} />;
    }, []);

    return (
        <View>
            <FlatList
                data={slideList}
                style={styles.carousel}
                renderItem={renderItem}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                onScroll={onScroll}
                {...flatListOptimizationProps}
            />
            <Pagination index={index}></Pagination>
        </View>
    );
}
