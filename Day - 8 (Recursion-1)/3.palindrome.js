fun palindrome(s: String, S: Int, E: Int): Boolean {

    if (S >= E) {
        return true
    }

    if (s[S] != s[E]) {
        return false
    }

    return palindrome(s, S + 1, E - 1)
}

fun main() {
    val s = "raceacar"
    val result = palindrome(s, 0, s.length - 1)
    println(result)
}
