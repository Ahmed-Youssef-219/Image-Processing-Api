import sharp from 'sharp';

const useSharp = async (name: string, width: string, height: string) => {
    try {
        const data = await sharp(`./src/assets/${name}.jpg`)
            .resize(parseInt(width), parseInt(height))
            .toFile(`./src/thumnails/${name}_${width}_${height}.jpg`);
        /* console.log(typeof data) */
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default useSharp;
