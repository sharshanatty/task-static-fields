export default class TestClass {
    public counter: number = 0;
    public static counterStatic: number = 0;
    public static PI(): number {
        return Math.PI;
    }
    public static ceil(x: number): number {
        return Math.ceil(x);
    }
}
