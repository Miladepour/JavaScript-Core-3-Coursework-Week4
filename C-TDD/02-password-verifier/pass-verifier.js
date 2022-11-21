function passVerifier(pass) {
  if (pass.length < 8) {
    return `Password rejected`;
  } else if (pass === null) {
    return `Password rejected`;
  } else if (!/[A-Z]/.test(pass)) {
    return `Password rejected`;
  } else if (!/[0-9]/.test(pass)) {
    return `Password rejected`;
  } else {
    return `Password accepted`;
  }
}

module.exports = passVerifier;
