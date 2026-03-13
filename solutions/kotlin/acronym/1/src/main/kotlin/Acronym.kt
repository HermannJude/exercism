object Acronym {
    fun generate(phrase: String) : String =
    phrase.split(Regex("[\\s-]+"))
            .map { it.filter { char -> char.isLetterOrDigit() } }
            .filter { it.isNotEmpty() }
            .map { it[0].uppercaseChar() }
            .joinToString("")
}
