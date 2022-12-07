public enum AvailableCommands {

    MoveSouth("s", String.format("[%s] - go south", "s")),
    MoveNorth("n", String.format("[%s] - go north", "n")),
    MoveEast("e", String.format("[%s] - go east", "e")),
    MoveWest("w", String.format("[%s] - go west", "w")),
    Strike("*", String.format("[%s] - strike", "*")),
    Info("i", String.format("[%s] - info", "i")),
    EndGame("x", String.format("[%s] -end game", "x"));


    public final String key;
    public final String formattedString;

    AvailableCommands(String key, String formattedString) {
        this.key = key;
        this.formattedString = formattedString;
    }


}
