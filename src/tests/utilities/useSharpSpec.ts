import useSharp from '../../utilities/useSharp';

const name = 'fjord';
const width = '150';
const height = '150';
describe('Test image processing', () => {
    it('expect usesharp().width to equal to 150 when passing queries name=fjord&width=150&height=150', async () => {
        const data = await useSharp(name, width, height);
        expect(data?.width).toEqual(150);
    });

    it('expect usesharp().height to equal to 150 when passing queries name=fjord&width=150&height=150', async () => {
        const data = await useSharp(name, width, height);
        expect(data?.height).toEqual(150);
    });
    it("expect usesharp().format to equal to 'jpeg' when passing queries name=fjord&width=150&height=150", async () => {
        const data = await useSharp(name, width, height);
        expect(data?.format).toEqual('jpeg');
    });
});

/* {format:'jpeg', width: 150, height: 150, channels: 3, premultiplied: false, size: 4317} */
